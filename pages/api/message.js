import { Message } from '../../models';

export default (req, res) => {
  return Message.random()
    .then(message => message.toJSON())
    .then(message => res.json({ ok: true, message }))
    .catch(err => {
      console.error(err);
      return res.status(500).json({ ok: false });
    });
}
