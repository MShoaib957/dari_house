"use client"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Check, CreditCard, Truck, ShieldCheck, Container } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { state, clearCart, subtotal } = useCart();
  const { items } = state;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    cardName: "",
    expiration: "",
    cvv: "",
  });

  const [formStep, setFormStep] = useState(1);

  // Calculate totals
  const shipping = subtotal > 999 ? 0 : 75;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would handle payment processing here

    // For demo purposes, simulate a successful order
    setTimeout(() => {
      clearCart();
      navigate("/order-confirmation");
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <Container className="py-32 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-8">
          Add some products to your cart before checking out.
        </p>
        <Button onClick={() => navigate("/products")}>Browse Products</Button>
      </Container>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
            Checkout
          </h1>

          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  formStep >= 1
                    ? "bg-amber-800 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {formStep > 1 ? <Check size={16} /> : 1}
              </div>
              <div
                className={`flex-1 h-1 ${
                  formStep > 1 ? "bg-amber-800" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  formStep >= 2
                    ? "bg-amber-800 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium">Shipping</span>
              <span className="text-sm font-medium">Payment</span>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                {formStep === 1 && (
                  <form onSubmit={handleNextStep}>
                    <h2 className="text-xl font-medium text-gray-900 mb-4">
                      Shipping Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="zip"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit">Continue to Payment</Button>
                    </div>
                  </form>
                )}

                {formStep === 2 && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-medium text-gray-900 mb-4">
                      Payment Information
                    </h2>

                    <div className="mb-4">
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Card Number *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CreditCard size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="cardName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          htmlFor="expiration"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Expiration Date *
                        </label>
                        <input
                          type="text"
                          id="expiration"
                          name="expiration"
                          value={formData.expiration}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="saveInfo"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-amber-800 focus:ring-amber-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="saveInfo"
                          className="font-medium text-gray-700"
                        >
                          Save my information for faster checkout
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="text-amber-800 hover:text-amber-900"
                      >
                        &larr; Back to Shipping
                      </button>
                      <Button type="submit">
                        Complete Order
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <h2 className="text-xl font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex">
                      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.product.material} | {item.product.color}
                        </p>
                        <p className="text-sm text-gray-900 mt-1">
                          ${item.product.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <p>Shipping</p>
                      {shipping === 0 && (
                        <span className="ml-1 text-green-600 text-xs flex items-center">
                          <Check size={12} className="mr-1" />
                          Free
                        </span>
                      )}
                    </div>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Tax (8%)</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between font-medium text-gray-900 pt-2 border-t border-gray-200">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <Truck
                      size={16}
                      className="text-amber-800 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <p>Free shipping on orders over $999</p>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheck
                      size={16}
                      className="text-amber-800 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <p>Secure checkout with encrypted payment processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
