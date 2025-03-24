import type { Meta, StoryObj } from "@storybook/react";
import ProductionReadyDatabase from "../ProductionReadyDatabase";

const meta: Meta<typeof ProductionReadyDatabase> = { title: "Azure/General/ProductionReadyDatabase", component: ProductionReadyDatabase };

export default meta;
type Story = StoryObj<typeof ProductionReadyDatabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
