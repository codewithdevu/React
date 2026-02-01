import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from './index'
import service from '../appwrite/confService'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? service.uploadFile(data.image[0]) : null

            if (file) {
                service.deleteFile(post.featuredImage)

            }

            const dbpost = await service.updatePost(post.$id , {
                ...data,
                featuredImage: file ? file.$id : undefined,

            })
                if(dbpost) {
                    navigate(`/post/${dbpost.$id}`)
                }
        } else{
            const file = service.uploadFile(data.image[0]);
        }
    }
    return (
        <div></div>
    )
}

export default PostForm
