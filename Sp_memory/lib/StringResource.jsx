﻿
/************************************界面的字符串资源***************************************/
sp.extend(sp,{
        isDown: {en:"Would you like to download new version now?",ch:"现在开始下载新版本吗?"},
        settings: { en: "Setting", ch: "设置" },
        groupName: { en: "Group name :", ch: "组名 :" },
        elementName: { en: "Element Name :", ch: "元素名 :" },
        changeName: { en: "Rename item", ch: "重命名元素" },
        importPicture: { en: "Import picture", ch: "导入图片" },
        importFile: { en: "Import file", ch: "导入组" },
        exportFile: { en: "Export file", ch: "导出组" },
        addGroup: { en: "New group", ch: "新建组" },
        deleteGroup: { en: "Remove group", ch: "删除组" },
        addElement: { en: "New item", ch: "新建元素" },
        deleteElement: { en: "Remove item", ch: "删除元素" },
        create: { en: "New layer", ch: "生成层" },
        cover: { en: "Cover item", ch: "覆盖元素" },
        isShow: { en: "Show text", ch: "显示文字" },
        isAlert: { en: "Deleting Alert", ch: "删除时警告" },
        isPrecomp: { en: "Pre-compose", ch: "预合成" },
        isOffset: { en: "Save material", ch: "存储素材" },
        isName: { en: "Auto rename", ch: "自动取名" },
        isEffect: { en: "Only property", ch: "仅生成效果" },
        cleanProperty: { en: "Empty prop", ch: "清空属性组" },
        offsetKey: { en: "Shift keyframe", ch: "关键帧偏移" },
        sureDelete: { en: "Are you sure to delete it?", ch: "确认删除?" },
        helperScripts: { en: "Help scripts", ch: "辅助脚本" },
        expressionTranslate: { en: "Fix expression errors", ch: "表达式翻译" },
        script: { en: "Sp_palette v1.0", ch: "形状层画板" },
        reloadGroup: { en: "Reload previews of group", ch: "重载组内预览动画" },
        saveEachLayer: { en: "Save every layer in active comp", ch: "自动存储每一层" },
        cutLength: { en: "Cut layer length", ch: "裁剪层长度" },
        blankName: { en: "Name should not be empty!", ch: "名字不应为空!" },
        existName: { en: "Element with the same name exists already!", ch: "相同名字的元素已存在!" },
        overWritten: { en: "File with the same name exists already!", ch: "相同名字的文件已存在!" },
        inputName: { en: "Please input your name!", ch: "请输入名字!" },
        alertSpe: { en: "There are special symbols in selectedLayers,please rename them first!", ch: "选中层名字有特殊符号,请首先重命名选中层!" },
        deleteFolder: { en: "Empty temp folder", ch: "清空素材文件夹" },
        changeGroupName: { en: "Change name of group", ch: "重命名选中组" },
        deleteOk: { en: "Clean folder successfully!", ch: "清空文件夹完毕!" },
        yushe: { en: "Preset Setting", ch: "预设设置" },
        jinOne: { en: "Please select groups that will be created on selectedLayers", ch: "请选择在仅生成效果时要在选中层上生成的属性组" },
        jinTwo: { en: "Please select groups that will be empty on selectedLayers before creating Properties", ch: "请选择在仅生成效果之前要清空的选中层的属性组" },
        isSureGroup: { en: "What you are deleting is a Group.\rAre you sure?", ch: "你正在删除的是一个组.\r确定删除吗?" },
        isSureGroup2: { en: "Repeat!\rWhat you are deleting is a Group.\rAre you sure?\r", ch: "重复!\r你正在删除的是一个组.\r确定删除吗?" },
        _1: { en: "Mask", ch: "遮罩" },
        _2: { en: "Effect", ch: "效果" },
        _3: { en: "Transform", ch: "变换" },
        _4: { en: "Material options", ch: "3D材质选项" },
        _5: { en: "Layer styles", ch: "图层样式" },
        _6: { en: "Shape content", ch: "形状层形状组" },
        _7: { en: "Text animators", ch: "文字层动画器" },
        _8: { en: "Light options", ch: "灯光选项" },
        _9: { en: "Camera options", ch: "摄像机选项" },
        setName: { en: "Please input the name.", ch: "请输入名字" },
        checkVersion: {en:"Check version",ch:"检查更新"},
        newVersionFind:{en:"New version found,please download the new version ",ch:"存在新版本,请下载最新版v"},
        newVersionNotFind:{en:"No new version!",ch:"已是最新版!"},
        link: {en:"Weibo",ch:"作者微博"},
        about: {
            en: 
"""Made by:Smallpath
E-mail:smallpath2013@gmail.com
Source Code:
github.com/Smallpath/Memory

DoubleClick:generate new layers or properties on selected layers from selected element.
RightClick:call the shortcut menu.
Ctrl/Alt+RightClick:save selected layers as a new element.
Shift+Rightclick:call the up and down window

Shortcutkey when script runs as Window:
Key 'D' or 'Delete':delete selected element.
Key 'F': overlap selected element.
Key 'Up':drop up selected element.
Key 'Down':drop down selected element.""",
            ch: 
"""作者:
    Smallpath
邮箱:
    smallpath2013@gmail.com
源码托管地址:
github.com/Smallpath/Memory

右键点击:呼出右键菜单.
双击:从选中元素创建层或创建效果.
Ctrl/Alt+右键点击:从选中的层读取层信息以创建新元素.
Shift+右键:唤出移动元素的窗口

窗口模式运行脚本时:
D键:删除选中元素.
F键:覆盖选中元素.
上键:上移选中元素.
下键:下移选中元素."""
        },
        refresh: {
            en: """Please run this script to refresh pictures only when your group has been created with wrong thumbnails(such as all black)\rIt will spent a lot of time.\rNew thumbnails will be created at the time of active comp,so set your comp's time first.""",
            ch: """生成组内所有元素的预览动画:
##请用本功能对非3.x版本保存的组进行生成预览动画的操作:

此功能将生成组内所有元素的主缩略图和预览动画,其中主缩略图为当前合成的当前时间点的画面

注意:此功能将耗费大量时间,脚本会弹出图片文件夹,你可以根据其中的图片判断预览动画的生成进度
"""
        },
        auto: {
            en: """This script helps you simplify you saving proccess\rIt will save every layer in active comp as a new element.""",
            ch: """批量存储功能:

这会将当前合成中每一层都分别存储为一个新元素.

此功能可以帮助你快速存储新元素,十分适合存储大量的MG合成层
脚本会弹出图片文件夹,你可以根据其中的图片来判断预览动画的生成进度
"""},
        cutLength: {
            en: "This script will cut every layer in current comp, related to opacity for common layer and content length for comp layer.",
            ch: "此功能将会裁剪当前合成中每一层的长度,根据普通层的透明度与合成层内容的长度."
        },
        output: { en: "Export groups", ch: "批量导出组" },
        ok: { en: "Ok", ch: "确定", },
        cancel: { en: "Cancel", ch: "取消", },
        complete: { en: "Complete!", ch: "导出完成!" },
        showText: { en: "Show text", ch: "显示文字" },
        ui1: { en: "The newer UI", ch: "新界面" },
        ui2: { en: "The older UI", ch: "旧界面" },
        sys: { en: "Script find that Sp_memory v1.4 has been used the first time.\rPlease select the UI type,Yes for new UI and No for previous UI.", ch: "脚本检测到Sp_memory v1.4首次被使用.\r请选择脚本界面,Yes为新界面,No为旧界面." },
        uiC: { en: "Please restart script,ui will be changed.", ch: "界面已更新,请重启脚本" },
        from: { en: "Range is 0.", ch: "元素下标范围为:0" },
        ud: { en: "Up and down", ch: "上下移动选中元素" },
        up: { en: "Up", ch: "上移" },
        down: { en: "Down", ch: "下移" },
        jmp: { en: "Jump", ch: "跳转" },
        coverChange: { en: "Update thumb when cover", ch: "覆盖时更新缩略图" },
        folderName: { en: "The folder name of collect feature:", ch: "收集生成层时的文件夹名:" },
        effectName: { en: "The group name that can enable 'Only property' :", ch: "默认开启仅生成效果的组名:" },
        limitText: { en: "Limit the text for UI", ch: "限制新界面的文字" },
        scriptSetting: { en: "Setting", ch: "设置" },
        settingPre: { en: "Preference", ch: "预设" },
        thumbType:{ en:"Enable new type of thumb",ch:"启用另一种缩略图"},
        addModule:{en:"New module",ch:"新建模块"},
        deleteModule:{en:"Remove module",ch:"删除模块"},
        deleteModuleAlert:{
            en:"Dangerous!\r\nYou are deleting a module!\r\nAll groups in this module will be removed!\r\nDo you really want to remove this module?",
            ch:"警告!\r\n你正在删除一个模块!\r\n所有包含在此模块中的组都将被删除!\r\n你想要继续删除吗?"},
        addAlert:{en:"Repeart:\r\n",ch:"重复:\r\n"},
        move:{en:"Cut selected group to other module",ch:"剪切选中组到其他模块"},
        editModule:{en:"Move module or rename module",ch:"改变模块顺序或重命名模块"},
        changeModuleName:{en:"Change module name",ch:"重命名选中模块"},
        moduleHelpTip:{en:"press key 'Up' and 'Down can move the selected module' ",ch:"方向上下键可移动选中模块"},
        quit:{en:"Quit",ch:"退出"},
        selectGroupFirst:{en:"Please select a group first!",ch:"请先选中一个组!"},
        selectModuleFirst:{en:"Please select a module first!",ch:"请先选中一个模块!"},
        frameSecondText:{en:"The milliseconds length of frame continues when preview:",ch:"预览时一张图片持续的毫秒数:"},
        frameNumText:{en:"The number of picture sequence generated for preview",ch:"生成供预览的图片序列时图片的数量:"},
        reloadNeedFrames:{en:"Please input the max frames which will be used to correct the duration of Preview.Keep blank if you don't what this feature",
                                     ch:"请输入最大帧数,这将被用来使预览动画的时间范围更加准确\r\n不输入则将不进行校准"},
        needComp:{en:"Please select a comp first",ch:"脚本需要一个合成,当前合成不存在!"},
        previewAll:{en:"Preview all",ch:"预览全部"},
        previewSelected:{en:"Preview selected",ch:"预览选中"},
        needElement:{en:"Please select a element in the group",ch:"组内元素未被选中,请首先选中一个元素"},
        needElements:{en:"Please select at least one element in the group",ch:"组内元素未被选中,请至少选中一个元素"},
        needLayers:{en:"Please select at least one layer in the current comp",ch:"请选中至少一个层"},
        needModule:{en:"Please create a module first",ch:"请先新建一个模块"},
        isSavePreview:{ en: "Save preview", ch: "存储预览" },
        searchWindow:{ en: "Search", ch:"搜索"},
        getReport:{en: "Get report",ch:"生成报告"},
        
        })