import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/css/bootstrap.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/vendors/linericon/style.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/vendors/owl-carousel/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/vendors/lightbox/simpleLightbox.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/vendors/nice-select/css/nice-select.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/vendors/animate-css/animate.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/vendors/jquery-ui/jquery-ui.css" />
                    {/* <!-- main css --> */}
                    <link rel="stylesheet" href="/static/assets/template/fantom/css/style.css" />
                    <link rel="stylesheet" href="/static/assets/template/fantom/css/responsive.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style dangerouslySetInnerHTML={{__html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }
                    @media (max-width:767px){
                        .post_slider_inner.owl-carousel > .item {
                            width: 100%
                        }
                        .post_slider_inner.owl-carousel > .item:not(:first-of-type) {
                            display: none;
                        }
                    }`}}></style>
                </body>
            </html>
        );
    }
}
