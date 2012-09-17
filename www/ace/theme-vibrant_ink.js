ace.define("ace/theme/vibrant_ink",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-vibrant-ink",t.cssText="\n.ace-vibrant-ink .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-vibrant-ink .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-vibrant-ink .ace_gutter {\n  background: #1a1a1a;\n  color: white;\n}\n\n.ace-vibrant-ink .ace_print_margin {\n  width: 1px;\n  background: #1a1a1a;\n}\n\n.ace-vibrant-ink .ace_scroller {\n  background-color: #0F0F0F;\n}\n\n.ace-vibrant-ink .ace_text-layer {\n  color: #FFFFFF;\n}\n\n.ace-vibrant-ink .ace_cursor {\n  border-left: 2px solid #FFFFFF;\n}\n\n.ace-vibrant-ink .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #FFFFFF;\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_selection {\n  background: #6699CC;\n}\n\n.ace-vibrant-ink.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #0F0F0F;\n  border-radius: 2px;\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0);\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404040;\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_active_line {\n  background: #333333;\n}\n\n.ace-vibrant-ink .ace_gutter_active_line {\n  background-color: #333333;\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_selected_word {\n  border: 1px solid #6699CC;\n}\n\n.ace-vibrant-ink .ace_invisible {\n  color: #404040;\n}\n\n.ace-vibrant-ink .ace_keyword, .ace-vibrant-ink .ace_meta {\n  color:#FF6600;\n}\n\n.ace-vibrant-ink .ace_constant, .ace-vibrant-ink .ace_constant.ace_other {\n  color:#339999;\n}\n\n.ace-vibrant-ink .ace_constant.ace_character,  {\n  color:#339999;\n}\n\n.ace-vibrant-ink .ace_constant.ace_character.ace_escape,  {\n  color:#339999;\n}\n\n.ace-vibrant-ink .ace_constant.ace_numeric {\n  color:#99CC99;\n}\n\n.ace-vibrant-ink .ace_invalid {\n  color:#CCFF33;\nbackground-color:#000000;\n}\n\n.ace-vibrant-ink .ace_invalid.ace_deprecated {\n  color:#CCFF33;\nbackground-color:#000000;\n}\n\n.ace-vibrant-ink .ace_fold {\n    background-color: #FFCC00;\n    border-color: #FFFFFF;\n}\n\n.ace-vibrant-ink .ace_support.ace_function {\n  color:#FFCC00;\n}\n\n.ace-vibrant-ink .ace_variable {\n  color:#FFCC00;\n}\n\n.ace-vibrant-ink .ace_variable.ace_parameter {\n  font-style:italic;\n}\n\n.ace-vibrant-ink .ace_string {\n  color:#66FF00;\n}\n\n.ace-vibrant-ink .ace_string.ace_regexp {\n  color:#44B4CC;\n}\n\n.ace-vibrant-ink .ace_comment {\n  color:#9933CC;\n}\n\n.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name {\n  font-style:italic;\ncolor:#99CC99;\n}\n\n.ace-vibrant-ink .ace_entity.ace_name.ace_function {\n  color:#FFCC00;\n}\n\n.ace-vibrant-ink .ace_markup.ace_underline {\n    text-decoration:underline;\n}\n\n.ace-vibrant-ink .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPg5+f/z7Bq1ar/AA5lBCqoLxsgAAAAAElFTkSuQmCC) right repeat-y;\n}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})