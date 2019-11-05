const express = require('express');

function sumar(req, res){  
    const {a,b} = req.params;
    res.json(Number(a)+Number(b));
}

function restar(req, res){
    const {a,b} = req.params;
    res.json(Number(a)-Number(b));
}

function multiplicar(req, res){
    const {a,b} = req.params;
    res.json(Number(a)*Number(b));
}

function dividir(req, res){
    const {a,b} = req.params;
    res.json(Number(a)/Number(b));
}

module.exports = {sumar, restar, multiplicar, dividir};