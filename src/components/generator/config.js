// 表单属性【右面板】
export const formConf = {
    formRef: 'elForm',
    formModel: 'formData',
    size: 'mini',
    labelPosition: 'top',
    labelWidth: 100,
    formRules: 'rules',
    gutter: 20,
    disabled: false,
    span: 24,
    title: '问卷名称',
    description: '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位\n' +
        '用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
    formBtns: true,
    unFocusedComponentBorder: true
}

// 输入型组件 【左面板】
export const inputComponents = [
    {
        // 组件的自定义配置
        typeId: 'INPUT',
        __config__: {
            label: '单行文本',
            labelWidth: null,
            showLabel: true,
            changeTag: true,
            tag: 'el-input',
            tagIcon: 'input',
            defaultValue: undefined,
            required: true,
            layout: 'colFormItem',
            span: 24,
            document: 'https://element.eleme.cn/#/zh-CN/component/input',
            // 正则校验规则
            regList: []
        },
        // 组件的插槽属性
        __slot__: {
            prepend: '',
            append: ''
        },
        // 其余的为可直接写在组件标签上的属性
        placeholder: '请输入',
        style: {width: '100%'},
        clearable: true,
        'prefix-icon': '',
        'suffix-icon': '',
        maxlength: null,
        'show-word-limit': false,
        readonly: false,
        disabled: false
    },
    {
        typeId: 'TEXTAREA',
        __config__: {
            label: '多行文本',
            labelWidth: null,
            showLabel: true,
            tag: 'el-input',
            tagIcon: 'textarea',
            defaultValue: undefined,
            required: true,
            layout: 'colFormItem',
            span: 24,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/input'
        },
        type: 'textarea',
        placeholder: '请输入',
        autosize: {
            minRows: 4,
            maxRows: 4
        },
        style: {width: '100%'},
        maxlength: null,
        'show-word-limit': false,
        readonly: false,
        disabled: false
    },
    {
        typeId: 'NUMBER_INPUT',
        __config__: {
            label: '计数器',
            showLabel: true,
            changeTag: true,
            labelWidth: null,
            tag: 'el-input-number',
            tagIcon: 'number',
            defaultValue: undefined,
            span: 24,
            layout: 'colFormItem',
            required: true,
            regList: [],
            document: 'https://element.eleme.cn/#/zh-CN/component/input-number'
        },
        placeholder: '',
        min: undefined,
        max: undefined,
        step: 1,
        'step-strictly': false,
        precision: undefined,
        'controls-position': '',
        disabled: false
    }
]

// 选择型组件 【左面板】
export const selectComponents = [
    {
        typeId: 'SELECT',
        __config__: {
            label: '下拉选择',
            showLabel: true,
            labelWidth: null,
            tag: 'el-select',
            tagIcon: 'select',
            layout: 'colFormItem',
            span: 24,
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/select'
        },
        __slot__: {
            options: [{
                label: '选项一',
                value: 1
            }, {
                label: '选项二',
                value: 2
            }]
        },
        placeholder: '请选择',
        style: {width: '100%'},
        clearable: true,
        disabled: false,
        filterable: false,
        multiple: false
    },
    {
        typeId: 'CASCADER',
        __config__: {
            label: '级联选择',
            url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList',
            method: 'get',
            dataKey: 'list',
            showLabel: true,
            labelWidth: null,
            tag: 'el-cascader',
            tagIcon: 'cascader',
            layout: 'colFormItem',
            defaultValue: [],
            dataType: 'static',
            span: 24,
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/cascader'
        },
        options: [{
            id: 1,
            value: 1,
            label: '选项1',
            children: [{
                id: 2,
                value: 2,
                label: '选项1-1'
            }]
        }],
        placeholder: '请选择',
        style: {width: '100%'},
        props: {
            props: {
                multiple: false,
                label: 'label',
                value: 'value',
                children: 'children'
            }
        },
        'show-all-levels': true,
        disabled: false,
        clearable: true,
        filterable: false,
        separator: '/'
    },
    {
        typeId: 'RADIO',
        __config__: {
            label: '单选框组',
            labelWidth: null,
            showLabel: true,
            showRegList: false,
            tag: 'el-radio-group',
            tagIcon: 'radio',
            changeTag: true,
            defaultValue: undefined,
            layout: 'colFormItem',
            span: 24,
            optionType: 'default',
            regList: [],
            required: true,
            border: false,
            document: 'https://element.eleme.cn/#/zh-CN/component/radio'
        },
        __slot__: {
            options: [{
                label: '选项一',
                value: 1
            }, {
                label: '选项二',
                value: 2
            }]
        },
        style: {},
        size: 'medium',
        disabled: false
    },
    {
        typeId: 'CHECKBOX',
        __config__: {
            label: '多选框组',
            tag: 'el-checkbox-group',
            tagIcon: 'checkbox',
            defaultValue: [],
            span: 24,
            showLabel: true,
            showRegList: false,
            labelWidth: null,
            layout: 'colFormItem',
            optionType: 'default',
            required: true,
            regList: [],
            changeTag: true,
            border: false,
            document: 'https://element.eleme.cn/#/zh-CN/component/checkbox'
        },
        __slot__: {
            options: [{
                label: '选项一',
                value: 1
            }, {
                label: '选项二',
                value: 2
            }]
        },
        style: {},
        size: 'medium',
        min: null,
        max: null,
        disabled: false
    },
    {
        typeId: 'SWITCH',
        __config__: {
            label: '开关',
            tag: 'el-switch',
            tagIcon: 'switch',
            defaultValue: false,
            span: 24,
            showRegList: false,
            showLabel: true,
            labelWidth: null,
            layout: 'colFormItem',
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/switch'
        },
        style: {},
        disabled: false,
        'active-text': '',
        'inactive-text': '',
        'active-color': null,
        'inactive-color': null,
        'active-value': true,
        'inactive-value': false
    },
    {
        typeId: 'SLIDER',
        __config__: {
            label: '滑块',
            tag: 'el-slider',
            tagIcon: 'slider',
            defaultValue: null,
            showRegList: false,
            span: 24,
            showLabel: true,
            layout: 'colFormItem',
            labelWidth: null,
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/slider'
        },
        disabled: false,
        min: 0,
        max: 100,
        step: 1,
        'show-stops': false,
        range: false
    },
    {
        typeId: 'TIME',
        __config__: {
            label: '时间选择',
            tag: 'el-time-picker',
            tagIcon: 'time',
            defaultValue: null,
            span: 24,
            showLabel: true,
            showRegList: false,
            layout: 'colFormItem',
            labelWidth: null,
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/time-picker'
        },
        placeholder: '请选择',
        style: {width: '100%'},
        disabled: false,
        clearable: true,
        'picker-options': {
            selectableRange: '00:00:00-23:59:59'
        },
        format: 'HH:mm:ss',
        'value-format': 'HH:mm:ss'
    },
    {
        typeId: 'TIME_RANGE',
        __config__: {
            label: '时间范围',
            tag: 'el-time-picker',
            tagIcon: 'time-range',
            span: 24,
            showLabel: true,
            labelWidth: null,
            layout: 'colFormItem',
            defaultValue: null,
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/time-picker'
        },
        style: {width: '100%'},
        disabled: false,
        clearable: true,
        'is-range': true,
        'range-separator': '至',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        format: 'HH:mm:ss',
        'value-format': 'HH:mm:ss'
    },
    {
        typeId: 'DATE',
        __config__: {
            label: '日期选择',
            tag: 'el-date-picker',
            tagIcon: 'date',
            defaultValue: null,
            showLabel: true,
            labelWidth: null,
            span: 24,
            layout: 'colFormItem',
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
        },
        placeholder: '请选择',
        type: 'date',
        style: {width: '100%'},
        disabled: false,
        clearable: true,
        format: 'yyyy-MM-dd',
        'value-format': 'yyyy-MM-dd',
        readonly: false
    },
    {
        typeId: 'DATE_RANGE',
        __config__: {
            label: '日期范围',
            tag: 'el-date-picker',
            tagIcon: 'date-range',
            defaultValue: null,
            showRegList: false,
            span: 24,
            showLabel: true,
            labelWidth: null,
            required: true,
            layout: 'colFormItem',
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
        },
        style: {width: '100%'},
        type: 'daterange',
        'range-separator': '至',
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        disabled: false,
        clearable: true,
        format: 'yyyy-MM-dd',
        'value-format': 'yyyy-MM-dd',
        readonly: false
    },
    {
        typeId: 'RATE',
        __config__: {
            label: '评分',
            tag: 'el-rate',
            tagIcon: 'rate',
            defaultValue: 0,
            span: 24,
            showLabel: true,
            showRegList: false,
            labelWidth: null,
            layout: 'colFormItem',
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/rate'
        },
        style: {},
        max: 5,
        'allow-half': false,
        'show-text': false,
        'show-score': false,
        disabled: false
    },
    {
        typeId: 'COLOR',
        __config__: {
            label: '颜色选择',
            tag: 'el-color-picker',
            tagIcon: 'color',
            span: 24,
            defaultValue: null,
            showLabel: true,
            showRegList: false,
            labelWidth: null,
            layout: 'colFormItem',
            required: true,
            regList: [],
            changeTag: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/color-picker'
        },
        'show-alpha': false,
        'color-format': '',
        disabled: false,
        size: 'medium'
    },
    {
        typeId: 'UPLOAD',
        __config__: {
            label: '上传',
            tag: 'el-upload',
            tagIcon: 'upload',
            layout: 'colFormItem',
            defaultValue: null,
            showLabel: true,
            showRegList: false,
            labelWidth: null,
            required: true,
            span: 24,
            showTip: false,
            buttonText: '点击上传',
            regList: [],
            changeTag: true,
            fileSize: 10,
            sizeUnit: 'MB',
            document: 'https://element.eleme.cn/#/zh-CN/component/upload'
        },
        __slot__: {
            'list-type': true
        },
        action: process.env.VUE_APP_API_ROOT + '/project/file/upload/',
        disabled: false,
        accept: '',
        name: 'file',
        'auto-upload': true,
        'list-type': 'text',
        limit: 2,
        multiple: false
    }
]

// 图片型组件 【左面板】
export const imageComponents = [
    {
        typeId: 'IMAGE',
        __config__: {
            label: '图片展示',
            showLabel: false,
            labelWidth: null,
            showDefaultValue: false,
            showRequired: false,
            showClearable: false,
            showRegList: false,
            tag: 'el-image',
            tagIcon: 'image',
            layout: 'colFormItem',
            span: 24,
            required: true,
            regList: [],
            changeTag: true
        },
        __slot__: {
            'error': 'image'
        },
        style: {width: '100%'},
        src: '',
        fit: 'contain',
        alt: ''
    },
    {
        typeId: 'IMAGE_CAROUSEL',
        __config__: {
            label: '图片轮播',
            showLabel: true,
            labelWidth: null,
            defaultValue: null,
            showDefaultValue: false,
            showRequired: false,
            showClearable: false,
            showRegList: false,
            tag: 'el-carousel',
            tagIcon: 'image-carousel',
            layout: 'colFormItem',
            span: 24,
            required: false,
            regList: [],
            changeTag: true
        },
        __slot__: {
            options: [{
                label: '文字',
                image: 'https://qiniu.smileyi.top/757b505cfd34c64c85ca5b5690ee5293/b128cf03901945d6b6df46cf6acbfa01.jpg'
            }]
        },
        style: {width: '100%'}
    },
    {
        typeId: 'IMAGE_SELECT',
        __config__: {
            label: '图片选择',
            showLabel: true,
            labelWidth: null,
            defaultValue: null,
            showDefaultValue: true,
            showRequired: true,
            showClearable: false,
            showRegList: false,
            tag: 'image-select',
            tagIcon: 'image-select',
            layout: 'colFormItem',
            span: 24,
            required: false,
            regList: [],
            changeTag: true
        },
        multiple: false,
        options: [{
            label: '选项1',
            value: 1
        }],
        style: {width: '100%'}
    }
]

// 辅助型组件 【左面板】
export const assistComponents = [
    {
        typeId: 'DESC_TEXT',
        __config__: {
            label: '文字描述',
            defaultValue: '描述文字',
            showDefaultValue: true,
            showRequired: false,
            showClearable: false,
            showRegList: false,
            tag: 'desc-text',
            tagIcon: 'text',
            layout: 'colFormItem',
            span: 24,
            required: false,
            regList: [],
            changeTag: false
        },
        color: '',
        textAlign: 'left',
        style: {width: '100%'}
    },
    {
        typeId: 'DIVIDER',
        __config__: {
            label: '分割线',
            defaultValue: '分割线',
            showLabel: false,
            showDefaultValue: false,
            showRequired: false,
            showClearable: false,
            showRegList: false,
            tag: 'el-divider',
            tagIcon: 'divider',
            layout: 'colFormItem',
            span: 24,
            required: false,
            regList: [],
            changeTag: false
        },
        color: '#000000',
        style: {width: '100%'},
        action: '/project/file/upload/'
    },
    {
        typeId: 'SIGN_PAD',
        __config__: {
            label: '手写签名',
            defaultValue: '手写签名',
            showLabel: true,
            showDefaultValue: true,
            showRequired: true,
            showClearable: false,
            showRegList: false,
            tag: 'sign-pad',
            tagIcon: 'sign-pad',
            layout: 'colFormItem',
            span: 24,
            required: true,
            regList: [],
            changeTag: false
        },
        color: '#000000',
        style: {width: '100%'},
        action: '/project/file/upload/'
    },
    {
        typeId: 'PAGINATION',
        __config__: {
            label: '分页',
            defaultValue: '分页',
            showLabel: false,
            showDefaultValue: false,
            showRequired: false,
            showClearable: false,
            showRegList: false,
            tag: 'pagination',
            tagIcon: 'page',
            layout: 'colFormItem',
            span: 24,
            required: false,
            regList: [],
            changeTag: false
        },
        style: {width: '100%'}
    }
]
