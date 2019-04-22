import React, { Fragment, Component } from 'react';

class CreateNewClaim extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="name">Име на клиент</label>
                        <input type="text" class="form-control" id="name" placeholder="Например: Тодор Атанасов" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="product">Артикул</label>
                        <input type="text" class="form-control" id="product" placeholder="Например: Спален комплект Селина" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">E-mail</label>
                        <input type="text" class="form-control" id="email" placeholder="Например: mail@mail.bg" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="city">Град</label>
                        <input type="text" class="form-control" id="city" placeholder="Например: София"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Адрес</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Например: жк. Гео Милев бл. 01 ет. 01 ап. 01" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Създай рекламация</button>
            </form>
        )
    }
};

export default CreateNewClaim;