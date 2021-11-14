import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useActions} from '../hooks/useActions'
import styles from './template.module.scss'


export const Template = () => {
    const {fetchTemplate} = useActions()
    const {template} = useSelector(state => state.template)

    useEffect(() => {
        fetchTemplate(1)
    }, [])

    return (
        <div className={styles.template}>
            <div className={styles.content}>
                <div className={styles.title}>
                    {template.title}
                </div>
                <div className={styles.body}>
                    <pre>
                        {JSON.stringify([template.id, template.completed], null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}

