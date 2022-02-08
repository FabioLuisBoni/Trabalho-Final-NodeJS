import IOrderDTO from "../dtos/IOrderDTO";
//import IOrderProductDTO from "../dtos/IOrderProductDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class UpdateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    const orderRepository = new OrderRepository();

    const pedido = await orderRepository.findByIdSimple(Number(data.id));
    pedido.status = data.status;

    /*
    const pedido = await orderRepository.findById(Number(data.id)); //verificaçao do pedido

    let pedidoUpdate = {
      id: data.id,
      cliente_id: pedido.cliente_id,
      status: data.status,
      forma_pagamento: pedido.forma_pagamento,
      desconto: pedido.desconto,
      valor: pedido.valor,
      produtos_pedidos: Array<IOrderProductDTO>(),
    };

    pedido.produtos_pedidos.forEach((produto_pedido) => {
      pedidoUpdate.produtos_pedidos.push({
        produto_id: produto_pedido.produto_id,
        pedido_id: produto_pedido.pedido_id,
        quantidade: produto_pedido.quantidade,
      });
    });

    */ //Criando objeto para Update

    return await orderRepository.update(pedido);
  }
}
