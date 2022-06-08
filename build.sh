#!/bin/#!/usr/bin/env bash
 rm -r docs && npm run build && mv build docs && git add . && git commit -m "rebuild" && git push
