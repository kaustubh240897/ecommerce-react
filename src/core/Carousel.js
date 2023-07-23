import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  carouselContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  carouselWrapper: {
    display: "flex",
    width: "100%",
    position: "relative",
    alignItems: "center",
  },
  carouselContentWrapper: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  carouselContent: {
    display: "flex",
    transition: "all 250ms linear",
    "-ms-overflow-style": "none" /* hide scrollbar in IE and Edge */,
    "scrollbar-width": "none" /* hide scrollbar in Firefox */,
    "&::-webkit-scrollbar, &::-webkit-scrollbar": {
      display: "none",
    },
    "& > *": {
      width: "100%",
      flexShrink: 0,
      flexGrow: 1,
    },
  },
  leftArrow: {
    padding: 0,
    width: "48px",
    height: "48px",
    margin: "1rem",
  },
  rightArrow: {
    padding: 0,
    width: "48px",
    height: "48px",
    margin: "1rem",
  },
}));

const Carousel = (props) => {
  const classes = useStyles();
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const maxChildren = children.length > show ? show : children.length;

  console.log("chid", children);
  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + show);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - show);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0]?.clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0]?.clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      next();
    }
    if (diff < -5) {
      prev();
    }
    setTouchPosition(null);
  };

  return (
    children.length > 0 && (
      <div className={classes.carouselContainer}>
        <div className={classes.carouselWrapper}>
          {children.length > show && (
            <IconButton
              className={classes.leftArrow}
              onClick={prev}
              disabled={currentIndex <= 0}
            >
              <ChevronLeftOutlined />
            </IconButton>
          )}
          <div
            className={classes.carouselContentWrapper}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={classes.carouselContent}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / maxChildren)
                }%)`,
                width: `${100 / maxChildren}%`,
              }}
            >
              {children}
            </div>
          </div>
          {children.length > show && (
            <IconButton
              className={classes.rightArrow}
              onClick={next}
              disabled={currentIndex >= length - 1}
            >
              <ChevronRightOutlined />
            </IconButton>
          )}
        </div>
      </div>
    )
  );
};

export default Carousel;
