function block(letter, rate, used, code, father) {
this.letter = latter;
this.rate = rate;
this.used = used;
this.code = code;
this.father = father;
}

function FindCode(block) {

if (tree[block.father].code != '') {
 block.code = tree[block.father].code + '1';
 }
 else {
 if (block.letter == tree[minIndex].letter) {
  block.code = '0';
  }
   else if (block.letter == tree[premintIndex].letter) {
   block.code = '1';
   }
    else {
    FindCode(tree[block.father]);
    block.code = tree[block.father].code + '0';
   }
  }
 }
