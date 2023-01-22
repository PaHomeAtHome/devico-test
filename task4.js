"use strict";

const body = document.querySelector("body");
const template = ["a", "b", "c", "d", "e", "f"];
const templateArea = [
  `"a b c"`,
  `"a d d"`,
  `"a d d"`,
  `"a d d"`,
  `"a d d"`,
  `"a d d"`,
  `"a d d"`,
  `"a d d"`,
  `"a d d"`,
  `"a e f"`,
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBlockColor(e) {
  const color = getRandomHexColor();
  if (e.currentTarget !== e.target) {
    e.target.innerText = Number(e.target.innerText) + 1;
    e.target.style.backgroundColor = color;
  }
}

const createBlocks = (number) => {
  const blocks = [];

  for (let i = 0; i < number; i++) {
    const color = getRandomHexColor();
    const block = document.createElement(`div`);
    block.style.outline = "1px solid black";
    block.innerHTML = `0`;
    block.style.display = "flex";
    block.style.gridArea = template[i];
    block.style.cursor = "pointer";
    block.style.justifyContent = "center";
    block.style.alignItems = "center";

    if (i === 0) {
      block.style.backgroundColor = `rgba(254,0,0,255)`;
    }

    if (i === 1) {
      block.style.backgroundColor = `rgba(92,0,254,255)`;
    }

    if (i === 2) {
      block.style.backgroundColor = `rgba(0,142,0,255)`;
    }

    if (i === 3) {
      block.style.backgroundColor = `rgba(143,0,130,255)`;
    }

    if (i === 4) {
      block.style.backgroundColor = `rgba(210,134,50,255)`;
    }

    if (i === 5) {
      block.style.backgroundColor = `rgba(232,241,168,255)`;
    }

    if (number > 6) {
      block.style.backgroundColor = `${color}`;
    }

    blocks.push(block);
  }
  return blocks;
};

const commonBlock = document.createElement(`div`);
commonBlock.style.display = "grid";
commonBlock.style.fontSize = "24px";
commonBlock.style.fontFamily = "Arial";
commonBlock.style.fontWeight = "700";
commonBlock.style.gridTemplateAreas = templateArea.join(" ");
commonBlock.style.width = "90vw";
commonBlock.style.height = "33vh";
commonBlock.style.margin = "auto";
commonBlock.style.marginTop = "50px";

commonBlock.append(...createBlocks(6));
commonBlock.addEventListener("click", changeBlockColor);

body.append(commonBlock);
