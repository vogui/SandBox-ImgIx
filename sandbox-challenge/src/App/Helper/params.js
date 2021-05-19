export const params = [
  {
    value: "ar",
    type: "ratio",
    short_description:
      "Specifies an aspect ratio to maintain when resizing and cropping the image.",
    url: "https://docs.imgix.com/apis/url/size/ar",
  },
  {
    value: "auto",
    type: "list",
    short_description: "Applies automatic enhancements to images.",
    url: "https://docs.imgix.com/apis/url/auto",
  },
  {
    value: "bg",
    type: "hex_color",
    description:
      "Colors the background of padded and partially-transparent images.",
    url: "https://docs.imgix.com/apis/url/bg",
  },
  {
    value: "blend",
    type: "hex_color",
    short_description: "Specifies the location of the blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend",
  },
  {
    value: "blend-align",
    type: "list",
    short_description:
      "Changes the blend alignment relative to the parent image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-align",
  },
  {
    value: "blend-alpha",
    type: "integer",
    short_description: "Changes the alpha of the blend image..",
    url: "https://docs.imgix.com/apis/url/blending/blend-alpha",
  },
  {
    value: "blend-color",
    type: "hex_color",
    short_description: "Specifies a color to use when applying the blend.",
    url: "https://docs.imgix.com/apis/url/blending/blend-color",
  },
  {
    value: "blend-crop",
    type: "list",
    short_description: "Specifies the type of crop for blend images.",
    url: "https://docs.imgix.com/apis/url/blending/blend-crop",
  },
  {
    value: "blend-fit",
    type: "string",
    short_description: "Specifies the fit mode for blend images.",
    url: "https://docs.imgix.com/apis/url/blending/blend-fit",
  },
  {
    value: "blend-h",
    type: "integer",
    short_description: "Adjusts the height of the blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-h",
  },
  {
    value: "blend-mode",
    type: "string",
    short_description: "Sets the blend mode for a blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-mode",
  },
  {
    value: "blend-pad",
    type: "integer",
    short_description: "Applies padding to the blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-pad",
  },
  {
    value: "blend-size",
    type: "string",
    short_description: "Adjusts the size of the blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-size",
  },
  {
    value: "blend-w",
    type: "integer",
    short_description: "Adjusts the width of the blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-w",
  },
  {
    value: "blend-h",
    type: "integer",
    short_description: "Adjusts the height of the blend image.",
    url: "https://docs.imgix.com/apis/url/blending/blend-y",
  },
  {
    value: "blend-x",
    type: "integer",
    short_description:
      "Adjusts the x-offset of the blend image relative to its parent.",
    url: "https://docs.imgix.com/apis/url/blending/blend-x",
  },
  {
    value: "blend-y",
    type: "integer",
    short_description:
      "Adjusts the y-offset of the blend image relative to its parent.",
    url: "https://docs.imgix.com/apis/url/blending/blend-y",
  },
  {
    value: "blur",
    type: "integer",
    short_description: "Applies a gaussian blur to an image.",
    url: "https://docs.imgix.com/apis/url/stylize/blur",
  },
  {
    value: "border",
    type: "integer",
    short_description: "Applies a border to an image",
    url: "https://docs.imgix.com/apis/url/border-and-padding/border",
  },
  {
    value: "border-bottom",
    type: "integer",
    short_description: "Sets bottom border of an image",
    url: "https://docs.imgix.com/apis/url/border-and-padding/border-bottom",
  },
  {
    value: "border-left",
    type: "integer",
    short_description: "Sets left border of an image",
    url: "https://docs.imgix.com/apis/url/border-and-padding/border-left",
  },
  {
    value: "border-radius",
    type: "integer",
    short_description: "Sets the outer radius of the image's border in pixels",
    url: "https://docs.imgix.com/apis/url/border-and-padding/border-radius",
  },
  {
    value: "border-radius-inner",
    type: "integer",
    short_description: "Sets the inner radius of the image's border in pixels.",
    url:
      "https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner",
  },
  {
    value: "border-right",
    type: "integer",
    short_description: "Sets right border of an image",
    url: "https://docs.imgix.com/apis/url/border-and-padding/border-right",
  },
  {
    value: "border-top",
    type: "integer",
    short_description: "Sets top border of an image",
    url: "https://docs.imgix.com/apis/url/border-and-padding/border-top",
  },
  {
    value: "bri",
    type: "integer",
    short_description: "Adjusts the brightness of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/bri",
  },
  {
    value: "ch",
    type: "list",
    short_description: "Sets one or more Client-Hints headers.",
    url: "https://docs.imgix.com/apis/url/format/ch",
  },
  {
    value: "chromasub",
    type: "integer",
    short_description: "Specifies the output chroma subsampling rate.",
    url: "https://docs.imgix.com/apis/url/format/chromasub",
  },
  {
    value: "colorquant",
    type: "integer",
    short_description: "Limits the number of unique colors in an image.",
    url: "https://docs.imgix.com/apis/url/format/colorquant",
  },
  {
    value: "colors",
    type: "integer",
    short_description:
      "Specifies how many colors to include in a palette-extraction response.",
    url: "https://docs.imgix.com/apis/url/color-palette/colors",
  },
  {
    value: "con",
    type: "integer",
    short_description: "Adjusts the contrast of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/con",
  },
  {
    value: "corner-radius",
    type: "integer",
    short_description: "Specifies the radius value for a rounded corner mask.",
    url: "https://docs.imgix.com/apis/url/mask/corner-radius",
  },
  {
    value: "crop",
    type: "list",
    short_description: "Specifies how to crop an image.",
    url: "https://docs.imgix.com/apis/url/size/crop",
  },
  {
    value: "cs",
    type: "string",
    short_description: "Specifies the color space of the output image.",
    url: "https://docs.imgix.com/apis/url/format/cs",
  },
  {
    value: "dl",
    type: "string",
    short_description: "Forces a URL to use send-file in its response.",
    url: "https://docs.imgix.com/apis/url/format/dl",
  },
  {
    value: "dpi",
    type: "integer",
    short_description: "Sets the DPI value in the EXIF header.",
    url: "https://docs.imgix.com/apis/url/format/dpi",
  },
  {
    value: "dpr",
    type: "integer",
    short_description: "Adjusts the device-pixel ratio of the output image.",
    url: "https://docs.imgix.com/apis/url/dpr",
  },
  {
    value: "duotone",
    type: "hex_color",
    short_description: "Applies a duotone effect to the source image.",
    url: "https://docs.imgix.com/apis/url/stylize/duotone",
  },
  {
    value: "duotone-alpha",
    type: "integer",
    short_description:
      "Changes the alpha of the duotone effect atop the source image.",
    url: "https://docs.imgix.com/apis/url/stylize/duotone-alpha",
  },
  {
    value: "exp",
    type: "integer",
    short_description: "Adjusts the exposure of the output image.",
    url: "https://docs.imgix.com/apis/url/adjustment/exp",
  },
  {
    value: "exp",
    type: "timestamp",
    short_description:
      "A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.",
    url: "https://docs.imgix.com/apis/url/expires",
  },
  {
    value: "faceindex",
    type: "integer",
    short_description: "Selects a face to crop to.",
    url: "https://docs.imgix.com/apis/url/face-detection/faceindex",
  },
  {
    value: "facepad",
    type: "integer",
    short_description: "Adjusts padding around a selected face.",
    url: "https://docs.imgix.com/apis/url/face-detection/facepad",
  },
  {
    value: "faces",
    type: "integer",
    short_description:
      "Specifies that face data should be included in output when combined with `fm=json`.",
    url: "https://docs.imgix.com/apis/url/face-detection/faces",
  },
  {
    value: "fill",
    type: "string",
    short_description:
      "Determines how to fill in additional space created by the fit setting",
    url: "https://docs.imgix.com/apis/url/fill/fill",
  },
  {
    value: "fill-color",
    type: "hex_color",
    short_description:
      "Sets the fill color for images with additional space created by the fit setting",
    url: "https://docs.imgix.com/apis/url/fill/fill-color",
  },
  {
    value: "fit",
    type: "string",
    short_description:
      "Specifies how to map the source image to the output image dimensions.",
    url: "https://docs.imgix.com/apis/url/size/fit",
  },
  {
    value: "flip",
    type: "string",
    short_description: "Flips an image on a specified axis.",
    url: "https://docs.imgix.com/apis/url/rotation/flip",
  },
  {
    value: "fm",
    type: "string",
    short_description: "Changes the format of the output image.",
    url: "https://docs.imgix.com/apis/url/format/fm",
  },
  {
    value: "fp-debug",
    type: "string",
    short_description:
      "Displays crosshairs identifying the location of the set focal point",
    url: "https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug",
  },
  {
    value: "fp-x",
    type: "unit_scalar",
    short_description:
      "Sets the relative horizontal value for the focal point of an image",
    url: "https://docs.imgix.com/apis/url/focalpoint-crop/fp-x",
  },
  {
    value: "fp-y",
    type: "unit_scalar",
    short_description:
      "Sets the relative vertical value for the focal point of an image",
    url: "https://docs.imgix.com/apis/url/focalpoint-crop/fp-y",
  },
  {
    value: "fp-z",
    type: "unit_scalar",
    short_description:
      "Sets the relative zoom value for the focal point of an image",
    url: "https://docs.imgix.com/apis/url/focalpoint-crop/fp-z",
  },
  {
    value: "gam",
    type: "integer",
    short_description: "Adjusts the gamma of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/gam",
  },
  {
    value: "grid-colors",
    type: "hex_color",
    short_description:
      "Sets grid colors for the transparency checkerboard grid.",
    url: "",
  },
  {
    value: "grid-size",
    type: "integer",
    short_description: "Sets grid size for the transparency checkerboard grid.",
    url: "",
  },
  {
    value: "h",
    type: "integer",
    short_description: "Adjusts the height of the output image.",
    url: "https://docs.imgix.com/apis/url/size/h",
  },
  {
    value: "high",
    type: "integer",
    short_description: "Adjusts the highlights of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/high",
  },
  {
    value: "htn",
    type: "integer",
    short_description: "Applies a half-tone effect to the source image.",
    url: "https://docs.imgix.com/apis/url/stylize/htn",
  },
  {
    value: "hue",
    type: "integer",
    short_description: "Adjusts the hue of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/hue",
  },
  {
    value: "invert",
    type: "boolean",
    short_description: "Inverts the colors on the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/invert",
  },
  {
    value: "lossless",
    type: "boolean",
    short_description:
      "Specifies that the output image should be a lossless variant.",
    url: "https://docs.imgix.com/apis/url/format/lossless",
  },
  {
    value: "mark",
    type: "url",
    short_description: "Specifies the location of the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark",
  },
  {
    value: "mark-align",
    type: "list",
    short_description:
      "Changes the watermark alignment relative to the parent image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-align",
  },
  {
    value: "mark-alpha",
    type: "integer",
    short_description: "Changes the alpha of the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-alpha",
  },
  {
    value: "mark-base",
    type: "url",
    short_description: "Changes base URL of the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-base",
  },
  {
    value: "mark-fit",
    type: "string",
    short_description: "Specifies the fit mode for watermark images.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-fit",
  },
  {
    value: "mark-h",
    type: "integer",
    short_description: "Adjusts the height of the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-h",
  },
  {
    value: "mark-pad",
    type: "integer",
    short_description: "Applies padding to the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-pad",
  },
  {
    value: "mark-rot",
    type: "integer",
    short_description:
      "Rotates a watermark or tiled watermarks by a specified number of degrees.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-rot",
  },
  {
    value: "mark-scale",
    type: "integer",
    short_description: "Adjusts the scale of the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-scale",
  },
  {
    value: "mark-title",
    type: "string",
    short_description: "Adds tiled watermark.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-tile",
  },
  {
    value: "mark-w",
    type: "integer",
    short_description: "Adjusts the width of the watermark image.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-w",
  },
  {
    value: "mark-x",
    type: "integer",
    short_description:
      "Adjusts the x-offset of the watermark image relative to its parent.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-x",
  },
  {
    value: "mark-y",
    type: "integer",
    short_description:
      "Adjusts the y-offset of the watermark image relative to its parent.",
    url: "https://docs.imgix.com/apis/url/watermark/mark-y",
  },
  {
    value: "mark",
    type: "string",
    short_description:
      "Defines the type of mask and specifies the URL if that type is selected.",
    url: "https://docs.imgix.com/apis/url/mask",
  },
  {
    value: "mark-bg",
    type: "hex-color",
    short_description:
      "Colors the background of the transparent mask area of images",
    url: "https://docs.imgix.com/apis/url/mask/mask-bg",
  },
  {
    value: "max-w",
    type: "integer",
    short_description:
      "Specifies the maximum width of the output image in pixels.",
    url: "https://docs.imgix.com/apis/url/size/max-width",
  },
  {
    value: "max-h",
    type: "integer",
    short_description:
      "Specifies the maximum height of the output image in pixels.",
    url: "https://docs.imgix.com/apis/url/size/max-height",
  },
  {
    value: "min-h",
    type: "integer",
    short_description:
      "Specifies the minimum height of the output image in pixels.",
    url: "https://docs.imgix.com/apis/url/size/min-height",
  },
  {
    value: "min-w",
    type: "integer",
    short_description:
      "Specifies the minimum width of the output image in pixels.",
    url: "https://docs.imgix.com/apis/url/size/min-width",
  },
  {
    value: "monochrome",
    type: "hex_color",
    short_description: "Applies a monochrome effect to the source image.",
    url: "https://docs.imgix.com/apis/url/stylize/monochrome",
  },
  {
    value: "nr",
    type: "integer",
    short_description: "Reduces the noise in an image.",
    url: "https://docs.imgix.com/apis/url/noise-reduction/nr",
  },
  {
    value: "nrs",
    type: "integer",
    short_description: "Provides a threshold by which to sharpen an image.",
    url: "https://docs.imgix.com/apis/url/noise-reduction/nrs",
  },
  {
    value: "orient",
    type: "integer",
    short_description: "Changes the image orientation.",
    url: "https://docs.imgix.com/apis/url/rotation/orient",
  },
  {
    value: "pad",
    type: "integer",
    short_description: "Pads an image.",
    url: "https://docs.imgix.com/apis/url/border-and-padding/pad",
  },
  {
    value: "pad-bottom",
    type: "integer",
    short_description: "Sets bottom padding of an image.",
    url: "https://docs.imgix.com/apis/url/border-and-padding/pad-bottom",
  },
  {
    value: "pad-left",
    type: "integer",
    short_description: "Sets left padding of an image.",
    url: "https://docs.imgix.com/apis/url/border-and-padding/pad-left",
  },
  {
    value: "pad-right",
    type: "integer",
    short_description: "Sets right padding of an image.",
    url: "https://docs.imgix.com/apis/url/border-and-padding/pad-right",
  },
  {
    value: "pad-top",
    type: "integer",
    short_description: "Sets top padding of an image.",
    url: "https://docs.imgix.com/apis/url/border-and-padding/pad-top",
  },
  {
    value: "page",
    type: "integer",
    short_description: "Selects a page from a PDF for display.",
    url: "https://docs.imgix.com/apis/url/pdf/page",
  },
  {
    value: "palette",
    type: "string",
    short_description: "Specifies an output format for palette-extraction.",
    url: "https://docs.imgix.com/apis/url/color-palette/palette"
  },
  {
    value: "pdf-annotation",
    type: "boolean",
    short_description: "Enables or disables PDF annotation.",
    url: "https://docs.imgix.com/apis/url/pdf/pdf-annotation"
  },
  {
    value: "prefix",
    type: "string",
    short_description: "Specifies a CSS prefix for all classes in palette-extraction.",
    url: "https://docs.imgix.com/apis/url/color-palette/prefix"
  },
  {
    value: "px",
    type: "string",
    short_description: "Applies a pixelation effect to an image.",
    url: "https://docs.imgix.com/apis/url/stylize/px"
  },
  {
    value: "q",
    type: "integer",
    short_description: "Adjusts the quality of an output image.",
    url: "https://docs.imgix.com/apis/url/format/q"
  },
  {
    value: "rot",
    type: "integer",
    short_description: "Rotates an image by a specified number of degrees.",
    url: "https://docs.imgix.com/apis/url/rotation/rot"
  },
  {
    value: "rect",
    type: "integer",
    short_description: "Crops an image to a specified rectangle.",
    url: "https://docs.imgix.com/apis/url/size/rect"
  },
  {
    value: "sat",
    type: "integer",
    short_description: "Adjusts the saturation of an image.",
    url: "https://docs.imgix.com/apis/url/adjustment/sat"
  },
  {
    value: "sepia",
    type: "integer",
    short_description: "Applies a sepia effect to an image.",
    url: "https://docs.imgix.com/apis/url/stylize/sepia"
  },
  {
    value: "shad",
    type: "integer",
    short_description: "Adjusts the highlights of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/shad"
  },
  {
    value: "sharp",
    type: "integer",
    short_description: "Adjusts the sharpness of the source image.",
    url: "https://docs.imgix.com/apis/url/adjustment/sharp"
  },
  {
    value: "transparency",
    type: "string",
    short_description: "Adds checkerboard behind images which support transparency.",
    url: "https://docs.imgix.com/apis/url/fill/transparency"
  },
  {
    value: "trim",
    type: "string",
    short_description: "Trims the source image.",
    url: "https://docs.imgix.com/apis/url/trim/trim"
  },
  {
    value: "trim-color",
    type: "hex_color",
    short_description: "Specifies a trim color on a trim operation.",
    url: "https://docs.imgix.com/apis/url/trim/trim-color"
  },
  {
    value: "trim-md",
    type: "integer",
    short_description: "Specifies the mean difference on a trim operation.",
    url: "https://docs.imgix.com/apis/url/trim/trim-md"
  },
  {
    value: "trim-pad",
    type: "integer",
    short_description: "Pads the area of the source image before trimming.",
    url: "https://docs.imgix.com/apis/url/trim/trim-pad"
  },
  {
    value: "trim-sd",
    type: "integer",
    short_description: "Specifies the standard deviation on a trim operation.",
    url: "https://docs.imgix.com/apis/url/trim/trim-sd"
  },
  {
    value: "trim-tol",
    type: "integer",
    short_description: "Specifies the tolerance on a trim operation.",
    url: "https://docs.imgix.com/apis/url/trim/trim-tol"
  },
  {
    value: "txt",
    type: "string",
    short_description: "Sets the text string to render.",
    url: "https://docs.imgix.com/apis/url/text/txt"
  },
  {
    value: "txt-aling",
    type: "list",
    short_description: "Sets the vertical and horizontal alignment of rendered text relative to the base image.",
    url: "https://docs.imgix.com/apis/url/text/txt-align"
  },
  {
    value: "txt-clip",
    type: "list",
    short_description: "Sets the clipping properties of rendered text.",
    url: "https://docs.imgix.com/apis/url/text/txt-clip"
  },
  {
    value: "txt-color",
    type: "hex_color",
    short_description: "Specifies the color of rendered text.",
    url: "https://docs.imgix.com/apis/url/text/txt-color"
  },
  {
    value: "txt-fit",
    type: "string",
    short_description: "Specifies the fit approach for rendered text.",
    url: "https://docs.imgix.com/apis/url/text/txt-fit"
  },
  {
    value: "txt-font",
    type: "font",
    short_description: "Selects a font for rendered text.",
    url: "https://docs.imgix.com/apis/url/text/txt-font"
  },
  {
    value: "txt-lead",
    type: "integer",
    short_description: "Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.",
    url: "https://docs.imgix.com/apis/url/typesetting/txt-lead"
  },
  {
    value: "txt-lig",
    type: "integer",
    short_description: "Controls the level of ligature substitution",
    url: "https://docs.imgix.com/apis/url/text/txt-lig"
  },
  {
    value: "txt-line",
    type: "integer",
    short_description: "Outlines the rendered text with a specified color.",
    url: "https://docs.imgix.com/apis/url/text/txt-line"
  },
  {
    value: "txt-line-color",
    type: "hex_color",
    short_description: "Specifies a text outline color.",
    url: "https://docs.imgix.com/apis/url/text/txt-line-color"
  },
  {
    value: "txt-pax",
    type: "integer",
    short_description: "Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.",
    url: "https://docs.imgix.com/apis/url/text/txt-pad"
  },
  {
    value: "txt-shad",
    type: "integer",
    short_description: "Applies a shadow to rendered text.",
    url: "https://docs.imgix.com/apis/url/text/txt-shad"
  },
  {
    value: "txt-track",
    type: "integer",
    short_description: "Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.",
    url: "https://docs.imgix.com/apis/url/typesetting/txt-track"
  },
  {
    value: "txt-width",
    type: "integer",
    short_description: "Sets the width of rendered text.",
    url: "https://docs.imgix.com/apis/url/text/txt-width"
  },
  {
    value: "usm",
    type: "integer",
    short_description: "Sharpens the source image using an unsharp mask.",
    url: "https://docs.imgix.com/apis/url/adjustment/usm"
  },
  {
    value: "usmrad",
    type: "integer",
    short_description: "Specifies the radius for an unsharp mask operation.",
    url: "https://docs.imgix.com/apis/url/adjustment/usmrad"
  },
  {
    value: "vid",
    type: "integer",
    short_description: "Adjusts the vibrance of an image.",
    url: "https://docs.imgix.com/apis/url/adjustment/vib"
  },
  {
    value: "w",
    type: "integer",
    short_description: "Adjusts the width of the output image.",
    url: "https://docs.imgix.com/apis/url/size/w"
  }, ,
];
