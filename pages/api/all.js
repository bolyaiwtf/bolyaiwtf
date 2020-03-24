import { Message } from '../../models';

export default (req, res) => {
  return Message.find()
    .then(messages => Promise.all(messages.map(m => m.toJSON())))
    .then(messages => res.json({ ok: true, messages }))
    .catch(err => {
      console.error(err);
      return res.status(500).json({ ok: false });
    });
}
