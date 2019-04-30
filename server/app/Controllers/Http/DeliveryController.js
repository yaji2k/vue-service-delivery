'use strict'

const Delivery = use('App/Models/Delivery');
const AuthService = use('App/Services/AuthService');

class DeliveryController {
    async index({ auth }) {
        const user = await auth.getUser();
        return user.deliveries().fetch();
    }

    async create({ request, auth }) {
        const user = await auth.getUser();
        const { title, distance, tariff} = request.all();
        const delivery = new Delivery;
        delivery.fill({
            title,
            distance,
            tariff
        });
        await user.deliveries().save(delivery);
        return delivery;
    }

    async delete({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const delivery = await Delivery.find(id);
        AuthService.verifyPerm(delivery, user);
        await delivery.delete();
        return delivery;
    }
    async update({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const delivery = await Delivery.find(id);
        AuthService.verifyPerm(delivery, user);
        delivery.merge(request.only(['title', 'distance', 'tariff']));
        await delivery.save();
        return delivery;
    }
}

module.exports = DeliveryController
