function out() {
    var title = "# "+$('.title').val()+"\n\n";

    var member = document.mtg_form.member.value;
    var memArray = member.split(",");

    mtg_form.output.value = title;

    mtg_form.output.value += "## メンバー\n";
    for (var i in memArray) {
        memArray[i] = memArray[i].trim();
        mtg_form.output.value += "["+memArray[i]+"](#name"+i+")";
        if (i != memArray.length-1) {
            mtg_form.output.value += ",";
        }
    }

    mtg_form.output.value += "\n\n";
    mtg_form.output.value += "## 全体に向けて\n\n";

    for (var i in memArray) {
        mtg_form.output.value += "## <a name=\"name"+i+"\">"+memArray[i]+"</a>" + "\n\n";
        if (document.mtg_form.Checkbox1.checked) {
            mtg_form.output.value += "### 前回のToDo\n\n";
        }
        if (document.mtg_form.Checkbox2.checked == true) {
            mtg_form.output.value += "### 読んだ論文\n\n";
        }
        if (document.mtg_form.Checkbox3.checked == true) {
            mtg_form.output.value += "### 就活\n\n";
        }
        if (document.mtg_form.Checkbox4.checked == true) {
            mtg_form.output.value += "### 技術\n\n";
        }
        if (document.mtg_form.Checkbox5.checked == true) {
            mtg_form.output.value += "### 提案\n\n";
        }
        if (document.mtg_form.Checkbox6.checked == true) {
            mtg_form.output.value += "### 研究\n\n";
        }
        if (document.mtg_form.Checkbox7.checked == true) {
            mtg_form.output.value += "### 実装\n\n";
        }
        if (document.mtg_form.Checkbox8.checked == true) {
            mtg_form.output.value += "### 背景\n\n";
        }
        if (document.mtg_form.Checkbox9.checked == true) {
            mtg_form.output.value += "### 関連研究\n\n";
        }
        if (document.mtg_form.Checkbox10.checked == true) {
            mtg_form.output.value += "### 問題点\n\n";
        }
        if (document.mtg_form.Checkbox11.checked == true) {
            mtg_form.output.value += "### システム概要\n\n";
        }
        if (document.mtg_form.Checkbox12.checked == true) {
            mtg_form.output.value += "### 評価\n\n";
        }
        if (document.mtg_form.Checkbox13.checked == true) {
            mtg_form.output.value += "### 今後の予定\n\n";
        }
        if (document.mtg_form.Checkbox14.checked == true) {
            mtg_form.output.value += "### ToDo\n\n";
        }
    }
}
