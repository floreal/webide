ace.define("ace/theme/solarized_dark",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-solarized-dark",t.cssText="\n.ace-solarized-dark .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-solarized-dark .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-solarized-dark .ace_gutter {\n  background: #01313f;\n  color: #d0edf7;\n}\n\n.ace-solarized-dark .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-solarized-dark .ace_scroller {\n  background-color: #002B36;\n}\n\n.ace-solarized-dark .ace_text-layer {\n  color: #93A1A1;\n}\n\n.ace-solarized-dark .ace_cursor {\n  border-left: 2px solid #D30102;\n}\n\n.ace-solarized-dark .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #D30102;\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_selection {\n  background: #073642;\n}\n\n.ace-solarized-dark.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #002B36;\n  border-radius: 2px;\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0);\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(147, 161, 161, 0.50);\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_active_line {\n  background: #073642;\n}\n\n.ace-solarized-dark .ace_gutter_active_line {\n  background-color: #0d3440;\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_selected_word {\n  border: 1px solid #073642;\n}\n\n.ace-solarized-dark .ace_invisible {\n  color: rgba(147, 161, 161, 0.50);\n}\n\n.ace-solarized-dark .ace_keyword, .ace-solarized-dark .ace_meta {\n  color:#859900;\n}\n\n.ace-solarized-dark .ace_constant.ace_language {\n  color:#B58900;\n}\n\n.ace-solarized-dark .ace_constant.ace_numeric {\n  color:#D33682;\n}\n\n.ace-solarized-dark .ace_constant.ace_other {\n  color:#CB4B16;\n}\n\n.ace-solarized-dark .ace_fold {\n    background-color: #268BD2;\n    border-color: #93A1A1;\n}\n\n.ace-solarized-dark .ace_support.ace_function {\n  color:#268BD2;\n}\n\n.ace-solarized-dark .ace_storage {\n  color:#93A1A1;\n}\n\n.ace-solarized-dark .ace_variable {\n  color:#268BD2;\n}\n\n.ace-solarized-dark .ace_string {\n  color:#2AA198;\n}\n\n.ace-solarized-dark .ace_string.ace_regexp {\n  color:#D30102;\n}\n\n.ace-solarized-dark .ace_comment {\n  font-style:italic;\ncolor:#657B83;\n}\n\n.ace-solarized-dark .ace_variable.ace_language {\n  color:#268BD2;\n}\n\n.ace-solarized-dark .ace_entity.ace_other.ace_attribute-name {\n  color:#93A1A1;\n}\n\n.ace-solarized-dark .ace_entity.ace_name.ace_function {\n  color:#268BD2;\n}\n\n.ace-solarized-dark .ace_markup.ace_underline {\n    text-decoration:underline;\n}\n\n.ace-solarized-dark .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db7zzBz5sz/AA82BCv7wOIDAAAAAElFTkSuQmCC) right repeat-y;\n}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})