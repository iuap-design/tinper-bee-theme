import ReactDOM from 'react-dom';

export const getHost = (key = 'api') => {
    const hosts = {
        api: {
            production: process.env.HOST || "",
            development: process.env.HOST || "",
        }
    };
    return hosts[key][process.env.NODE_ENV];
};

const fetchTools = {
    params(params) {
        try {
            return Object.keys(params).map((key) => {
                let param = params[key];
                switch (typeof param) {
                    case 'object':
                        param = escape(JSON.stringify(param));
                        break;
                    case 'undefined':
                        param = '';
                        break;
                    default:
                        break;
                }
                return `${key}=${param}`;
            }).join('&');
        } catch (e) {
            console.log('error in urlParams');
            return '';
        }
    },
    fetch(url, options) {
        return fetch(url, options).then((response) => {
            if (response.ok) {
                return response.text().then((text) => {
                    if (text) {
                        let result = {
                            success: false,
                            message: '接口请求失败',
                        };
                        try {
                            result = JSON.parse(text);
                        } catch (e) {
                            return Promise.reject(new Error('接口返回数据无法解析'));
                        }
                        const { success, data, message } = result;
                        if (success) {
                            return Promise.resolve(data);
                        } 
                        return Promise.reject(message);
                    }
                    return Promise.reject(new Error('接口未返回数据'));
                });
            }
            return Promise.reject(new Error('请求失败'));
        });
    },
    options(method = 'get', options = {}) {
        return {
            method: method.toUpperCase(),
            mode:'no-cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'isAjax': 1,
            },
            ...options,
        };
    },
    urlMaker(url) {
        if (!url) {
            throw new Error('has no url!');
        } else if (url.indexOf('http') !== 0) {
            url = `${getHost()}${url}`;
        }
        return url;
    },
};

export function post(oriUrl, oriParams = {}) {
    const {
        params,
        fetch,
        options: optionsMaker,
        urlMaker,
    } = fetchTools;
    const data = params(oriParams);
    const options = optionsMaker('post');
    options.headers['Content-Type'] = 'application/json;charset=UTF-8';
    try {
        options.body = JSON.stringify(oriParams);
    } catch (e) {
        return Promise.reject(e);
    }
    return fetch(urlMaker(process.env.API + oriUrl), options);
}

export function postFileCros(oriUrl, file) {
    const {
        params,
        fetch,
        options: optionsMaker,
        urlMaker,
    } = fetchTools;
    const options = optionsMaker('post', {
        mode: 'cors',
    });
    delete options.headers;
    try {
        options.body = file;
    } catch (e) {
        return Promise.reject(e);
    }
    console.log(options);
    return fetch(urlMaker(oriUrl), options);
}

export function get(oriUrl, oriParams = {}) {
    const {
        params,
        fetch,
        options,
        urlMaker
    } = fetchTools;

    const data = params(oriParams);
    let url = process.env.API + urlMaker(oriUrl);
    if (data) {
        url = `${url}?${data}`;
    }

    return fetch(url, options());
}


export function dateDiff(hisTime,nowTime){
    if(!arguments.length) return '';
    var arg = arguments,
            now =arg[1]?arg[1]:new Date().getTime(),
            diffValue = now - arg[0].getTime(),
            result={
                isToday:false
            },
            minute = 1000 * 60,
            hour = minute * 60,
            day = hour * 24,
            halfamonth = day * 15,
            month = day * 30,
            year = month * 12,
  
            _year = diffValue/year,
            _month =diffValue/month,
            _week =diffValue/(7*day),
            _day =diffValue/day,
            _hour =diffValue/hour,
            _min =diffValue/minute;
  
    if(new Date().toDateString()==hisTime.toDateString()){
        result.isToday=true;
    }
    if(_year>=1) result.text=parseInt(_year) + " years ago";
    else if(_month>=1) result.text=parseInt(_month) + " month ago";
    else if(_week>=1) result.text=parseInt(_week) + " week ago";
    else if(_day>=1) result.text=parseInt(_day) +" day ago";
    else if(_hour>=1) result.text=parseInt(_hour) +" hour ago";
    else if(_min>=1) result.text=parseInt(_min) +" minute ago";
    else result.text="just now";
    return result;
  }