// 在项目中通常把接口请求封装成api

import service from "../service";
import qs from 'qs'

// 注册接口
export function register(data){
  return service({
    method: 'post',
    url: '/user/register',
    data
  })
}

// 登录接口
export function login(data) {
  return service({
    method: 'post',
    url: '/user/login',
    data,
  })
}

export function getAllArticle(page, pageSize){
  return service({
    method: 'get',
    url: `/article/getArticleList?page=${page}&pageSize=${pageSize}`,
  })
}

// 通过文章id获取文章信息
export function getArticleInfoById(id){
  return service({
    method: 'get',
    url:`/article/getArticleInfoById?article_id=${id}`
  })
}

// 通过文章id获取文章标签
export function getTagNameByArticleId(id){
  return service({
    method: 'get',
    url:`/tag/getTagNameByArticleId?article_id=${id}`
  })
}

// 通过分类获取文章信息
// 通过文章id获取文章信息
export function getArticleInfoByCategory(category){
  return service({
    method: 'get',
    url:`/article/getArticleInfoByCategory?article_category=${category}`
  })
}

export function insertComment(data){
  return service({
    method: 'post',
    url: '/comment/insertComment',
    data
  })
}

export function getAllPictureByCategory(category){
  return service({
    method: 'get',
    url:`/picture/getAllPictureByCategory?img_category=${category}`
  })
}
