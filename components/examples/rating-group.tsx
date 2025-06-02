"use client";

import * as React from "react";
import { RatingGroup } from "@/registry/rating-group/rating-group";

export function BasicRatingExample() {
  const [rating, setRating] = React.useState("3");

  return <RatingGroup value={rating} onValueChange={setRating} max={5} />;
}

import { RatingGroupAdvanced } from "@/registry/rating-group/rating-group-advanced";
import { ThumbsUpIcon } from "lucide-react";

export function HalfStarRatingExample() {
  const [rating, setRating] = React.useState("3.5");

  return (
    <RatingGroupAdvanced
      value={rating}
      onValueChange={setRating}
      max={5}
      allowHalf={true}
    />
  );
}

export function HeartRatingExample() {
  const [rating, setRating] = React.useState("4");

  return (
    <RatingGroupAdvanced
      value={rating}
      onValueChange={setRating}
      max={5}
      variant="heart"
      colors={{
        filled: "fill-red-500 text-red-500",
        empty: "text-muted-foreground/50",
      }}
    />
  );
}

export function ReadOnlyRatingExample() {
  return <RatingGroupAdvanced value="4" max={5} readOnly={true} />;
}

export function CustomIconRatingExample() {
  const [rating, setRating] = React.useState("3");

  return (
    <RatingGroupAdvanced
      value={rating}
      onValueChange={setRating}
      max={5}
      emptyIcon={ThumbsUpIcon}
      filledIcon={ThumbsUpIcon}
      colors={{
        filled: "fill-blue-500 text-blue-500",
        empty: "text-muted-foreground/50",
      }}
    />
  );
}
