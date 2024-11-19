const express=require('express')
const router=express.Router()
router.get('/',function(req,res){
    res.render('home')
})
router.get('/buy',function(req,res){
    res.render('buy')
})
router.get('/sell',function(req,res){
    res.render('sell')
})
router.get('/services',function(req,res){
    res.render('services')
})
router.get('/about',function(req,res){
    res.render('about')
})
module.exports=router