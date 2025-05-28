import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Package, Truck, Calendar, Clock, Container } from "lucide-react";
import { Button } from "@/components/ui/button";

export const OrderConfirmationPage: React.FC = () => {
  // In a real application, this would come from the order processing system
  const orderNumber = `FD${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Estimate delivery date (14 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 14);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-amber-800 py-8 px-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-white p-2">
                <CheckCircle size={40} className="text-amber-800" />
              </div>
            </div>
            <h1 className="text-2xl font-serif font-semibold text-white mb-2">
              Thank You for Your Order!
            </h1>
            <p className="text-amber-100">
              Your order has been received and is being processed.
            </p>
          </div>

          {/* Order Details */}
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Order Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <Package size={18} className="text-amber-800 mr-2" />
                    <h3 className="font-medium text-gray-900">
                      Order Information
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Number:</span>
                      <span className="font-medium">{orderNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span>{orderDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method:</span>
                      <span>Credit Card (****1234)</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <Truck size={18} className="text-amber-800 mr-2" />
                    <h3 className="font-medium text-gray-900">
                      Shipping Information
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Method:</span>
                      <span>Standard Shipping</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Delivery:</span>
                      <span>{formattedDeliveryDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="inline-flex items-center bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        <Clock size={12} className="mr-1" /> Processing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                What's Next?
              </h2>

              <div className="border border-gray-200 rounded-md p-4">
                <ol className="relative">
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-amber-800 font-medium">1</span>
                    </span>
                    <h3 className="font-medium text-gray-900">
                      Order Processing
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      We're preparing your order for shipment. You'll receive an
                      email once your order has been shipped.
                    </p>
                  </li>
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-gray-500 font-medium">2</span>
                    </span>
                    <h3 className="font-medium text-gray-600">Shipping</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Your order will be shipped within 2-3 business days.
                      You'll receive tracking information via email.
                    </p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-gray-500 font-medium">3</span>
                    </span>
                    <h3 className="font-medium text-gray-600">Delivery</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Standard delivery takes 7-10 business days once shipped.
                      We'll coordinate with you for installation if requested.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                We've sent a confirmation email to your email address with all
                the details of your order.
              </p>

              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
                <Link to="/account/orders">
                  <Button>View Order History</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
