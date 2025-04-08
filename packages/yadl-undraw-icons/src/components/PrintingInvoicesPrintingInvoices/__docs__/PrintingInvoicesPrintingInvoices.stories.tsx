import type { Meta, StoryObj } from "@storybook/react";
import PrintingInvoicesPrintingInvoices from "../PrintingInvoicesPrintingInvoices";

const meta: Meta<typeof PrintingInvoicesPrintingInvoices> = { title: "unDraw/PrintingInvoicesPrintingInvoices", component: PrintingInvoicesPrintingInvoices };

export default meta;
type Story = StoryObj<typeof PrintingInvoicesPrintingInvoices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
