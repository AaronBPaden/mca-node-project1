"use strict";
const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const API = 'https://api.sampleapis.com/avatar/characters';

router.get('/', (req, res) => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            res.render('pages/characters', {
                title: 'ATLA Characters',
                name: 'ATLA Characters',
                data
            });
        });
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(data => {
            res.render('pages/single-character', {
                title: data.name,
                name: data.name,
                data
            });
        });
});

module.exports = router;
