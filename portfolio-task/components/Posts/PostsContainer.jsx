import React from 'react'
import styles from "./post.module.css"

const PostsContainer = () => {
    return (
        <div className={styles.container} >
            <section className={styles.content} >
                <div className={styles.postHeader} >
                    <p className={styles.recent} >Recent posts</p>
                    <p className={styles.view} >View All</p>
                </div>
            </section>
        </div>
    )
}

export default PostsContainer