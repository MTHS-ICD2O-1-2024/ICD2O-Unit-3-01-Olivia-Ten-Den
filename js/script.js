// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: Mar 20, 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateAreaOfTriangle() {
  // input
  const aBaseOfTrapezoid = parseInt(
    document.getElementById("a-base-of-trapezoid").value
  )
    const bBaseOfTrapezoid = parseInt(
    document.getElementById("b-base-of-trapezoid").value
  )
  const heightOfTrapezoid = parseFloat(
    document.getElementById("height-of-trapezoid").value
  )

  // process
  const areaOfTrapezoid = [(aBaseOfTrapezoid + bBaseOfTrapezoid) / 2] * heightOfTrapezoid

  // output
  document.getElementById("area").innerHTML =
    "The area is: " + areaOfTrapezoid + " mm²"
}
