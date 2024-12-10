import { useEffect, useState } from 'react'
import './Chat.css'

const Chat = () => {
	const [socket, setSocket] = useState(null)
	const [messageText, setMessageText] = useState('')
	const [body, setBody] = useState({})

	useEffect(() => {
		console.log('socket start', socket)

		const ws = new WebSocket('ws://localhost:8081/ws')

		ws.onopen = () => {
			console.log('Connected to socket')
		}

		ws.onmessage = (event) => {
			console.log(event)
			const response = JSON.parse(event.data)
			const body = JSON.parse(response.body)
			setBody(body)
		}

		setSocket(ws)
		console.log('set socket...', ws)
	}, [])

	const formatJson = (input) => {
		try {
			const parsed = typeof input === 'string' ? JSON.parse(input) : input

			return JSON.stringify(parsed)
		} catch (error) {
			console.error('Invalid JSON input:', error)
			return null // Возвращаем null, если входные данные некорректны
		}
	}

	const sendMessage = () => {
		if (!socket || socket.readyState !== WebSocket.OPEN) {
			alert('WebSocket connection is not open.')
			return
		}

		const newJSON = formatJson(messageText)
		socket.send(newJSON)
	}

	return (
		<div className='chat-container'>
			<div className='controls'>
				<button className='sendMessage' onClick={sendMessage}>
					Send
				</button>
			</div>

			<div className='action-form'>
				<textarea
					id='messageInput'
					type='text'
					placeholder='Enter message'
					value={messageText}
					onChange={(e) => setMessageText(e.target.value)}
				/>
			</div>

			<div id='messages' className='messages'>
				<span>Body:</span>
				<ul className='message-list'>
					{Object.entries(body).map(([key, value]) => (
						<li key={key} className='message-item'>
							<strong className='message-key'>{key}:</strong>{' '}
							<span className='message-value'>
								{typeof value === 'object' ? JSON.stringify(value) : value}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default Chat
