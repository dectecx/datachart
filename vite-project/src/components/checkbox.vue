<template>
  <template v-if="$props.checkboxStyle == CheckboxStyle.Toggle">
    <input class="tgl tgl-toggle" id="cb1" type="checkbox" />
    <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb1"></label>
  </template>
  <template v-if="$props.checkboxStyle == CheckboxStyle.Skewed">
    <input class="tgl tgl-skewed" id="cb2" type="checkbox" />
    <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb2"></label>
  </template>
  <template v-if="$props.checkboxStyle == CheckboxStyle.Flip">
    <input class="tgl tgl-flip" id="cb3" type="checkbox" />
    <label class="tgl-btn" data-tg-off="Nope" data-tg-on="Open" for="cb3"></label>
  </template>
</template>
<script lang="ts">
export enum CheckboxStyle {
  Toggle,
  Skewed,
  Flip
}
</script>
<script setup lang="ts">
import { } from 'vue';

interface Props {
  checkboxStyle: CheckboxStyle;
}
defineProps<Props>();
</script>
<style scoped>
h4 {
  color: #999;
}

.tgl {
  display: none;
}
.tgl,
.tgl:after,
.tgl:before,
.tgl *,
.tgl *:after,
.tgl *:before,
.tgl + .tgl-btn {
  box-sizing: border-box;
}
.tgl::-moz-selection,
.tgl:after::-moz-selection,
.tgl:before::-moz-selection,
.tgl *::-moz-selection,
.tgl *:after::-moz-selection,
.tgl *:before::-moz-selection,
.tgl + .tgl-btn::-moz-selection {
  background: none;
}
.tgl::selection,
.tgl:after::selection,
.tgl:before::selection,
.tgl *::selection,
.tgl *:after::selection,
.tgl *:before::selection,
.tgl + .tgl-btn::selection {
  background: none;
}
.tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.tgl + .tgl-btn:after,
.tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: '';
  width: 50%;
  height: 100%;
}
.tgl + .tgl-btn:after {
  left: 0;
}
.tgl + .tgl-btn:before {
  display: none;
}
.tgl:checked + .tgl-btn:after {
  left: 50%;
}

.tgl-toggle + .tgl-btn {
  background: #fbfbfb;
  border-radius: 2em;
  padding: 2px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border: 1px solid #e8eae9;
}
.tgl-toggle + .tgl-btn:after {
  border-radius: 2em;
  background: #fbfbfb;
  -webkit-transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;
  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
}
.tgl-toggle + .tgl-btn:hover:after {
  will-change: padding;
}
.tgl-toggle + .tgl-btn:active {
  box-shadow: inset 0 0 0 2em #e8eae9;
}
.tgl-toggle + .tgl-btn:active:after {
  padding-right: 0.8em;
}
.tgl-toggle:checked + .tgl-btn {
  background: #86d993;
}
.tgl-toggle:checked + .tgl-btn:active {
  box-shadow: none;
}
.tgl-toggle:checked + .tgl-btn:active:after {
  margin-left: -0.8em;
}

.tgl-skewed + .tgl-btn {
  overflow: hidden;
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-family: sans-serif;
  background: #888;
}
.tgl-skewed + .tgl-btn:after,
.tgl-skewed + .tgl-btn:before {
  -webkit-transform: skew(10deg);
  transform: skew(10deg);
  display: inline-block;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: 100%;
  text-align: center;
  position: absolute;
  line-height: 2em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
.tgl-skewed + .tgl-btn:after {
  left: 100%;
  content: attr(data-tg-on);
}
.tgl-skewed + .tgl-btn:before {
  left: 0;
  content: attr(data-tg-off);
}
.tgl-skewed + .tgl-btn:active {
  background: #888;
}
.tgl-skewed + .tgl-btn:active:before {
  left: -10%;
}
.tgl-skewed:checked + .tgl-btn {
  background: #86d993;
}
.tgl-skewed:checked + .tgl-btn:before {
  left: -100%;
}
.tgl-skewed:checked + .tgl-btn:after {
  left: 0;
}
.tgl-skewed:checked + .tgl-btn:active:after {
  left: 10%;
}

.tgl-flip + .tgl-btn {
  padding: 2px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-family: sans-serif;
  -webkit-perspective: 100px;
  perspective: 100px;
}
.tgl-flip + .tgl-btn:after,
.tgl-flip + .tgl-btn:before {
  display: inline-block;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  width: 100%;
  text-align: center;
  position: absolute;
  line-height: 2em;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 4px;
}
.tgl-flip + .tgl-btn:after {
  content: attr(data-tg-on);
  background: #02c66f;
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.tgl-flip + .tgl-btn:before {
  background: #ff3a19;
  content: attr(data-tg-off);
}
.tgl-flip + .tgl-btn:active:before {
  -webkit-transform: rotateY(-20deg);
  transform: rotateY(-20deg);
}
.tgl-flip:checked + .tgl-btn:before {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.tgl-flip:checked + .tgl-btn:after {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
  left: 0;
  background: #7fc6a6;
}
.tgl-flip:checked + .tgl-btn:active:after {
  -webkit-transform: rotateY(20deg);
  transform: rotateY(20deg);
}
</style>
