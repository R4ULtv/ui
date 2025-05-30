"use client";

import * as React from "react";
import { RatingGroup } from "@/registry/rating-group/rating-group";

export function BasicRatingExample() {
  const [rating, setRating] = React.useState("3");

  return <RatingGroup value={rating} onValueChange={setRating} max={5} />;
}
