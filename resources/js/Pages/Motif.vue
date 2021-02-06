<template>
  <div>
    <canvas id="c" height="600px" width="600px"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric'

export default {
  props: {
    motif: Object
  },
  mounted() {
    var canvas = new fabric.StaticCanvas('c');
    var motif = this.motif;
    console.log(motif.colors);
    fabric.Path.ATTRIBUTE_NAMES.push('class');
    fabric.loadSVGFromURL(motif.front_image, function(objects, options) {
      objects.forEach(function(obj) {
        switch (obj.class) {
          case "st0":
            //
            break;
          case "st1":
            //
            break;
          case "st2":
            obj.fill = motif.colors[0].color_values[0];
            break;
          default:
            //
            break;
        }
      });
      var objGroup = fabric.util.groupSVGElements(objects, options);
      canvas.add(objGroup).renderAll();
    });
  }
}
</script>

<style>
/* latin-ext */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  src: local('Bebas Neue'), local('Bebas Neue'), url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  src: local('Bebas Neue'), local('Bebas Neue'), url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>