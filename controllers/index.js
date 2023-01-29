const { getListData, getDetailData } = require('../models');

function indexView(req, res) {
  res.render('index', getListData());
}

function detailView(req, res) {
  const id = req.params.id;
  res.render('detail', getDetailData(id));
}

module.exports = {
  indexView,
  detailView
};