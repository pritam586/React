import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.updateFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featureImage: file ? file.$id : undefined
       })
      if(dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }else{
      const file = await appwriteService.uploadFile(data.image[0])
      if(file){
        const fileId = file.$id
        data.featureImage=fileId
       const dbPost =  await appwriteService.createPost({
          ...data,
          userId: userData.$id
        })
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  };

  const slugTransform = useCallback((value)=>{
    if(value && typeof value === 'string')
      return value
      .trim()
      .toLowerCase()
      .replace(/[a-zA-z\d\s]+/g,'-')
      .replace(/\s/g,'-')
    
      return ''
  })
  
  React.useEffect(()=>{
    const subscription = watch((value , {name})=>{
      if(name === 'title'){
        setValue('slug',slugTransform(value.title,{shouldValidate: true}))
      }
    }) 
    return ()=>{
      subscription.unsubscription()
    }
  },[watch, slugTransform, setValue])


  return <div>Post-Form</div>;
}

export default PostForm;
