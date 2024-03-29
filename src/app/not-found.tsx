import React from 'react';
import Head from 'next/head';
import WebLayout from "@/app/layout";
import Link from "next/link";

const Custom404Page = () => {
    return (
        <WebLayout>
            <Head>
                <title>The page you were looking for doesn't exist | 404</title>
            </Head>
            <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not
                        found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re
                        looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">

                        <Link href="/" className="text-sm font-semibold text-gray-900">Go
                            back home </Link>
                    </div>
                </div>
            </section>
        </WebLayout>
    )
}

export default Custom404Page;