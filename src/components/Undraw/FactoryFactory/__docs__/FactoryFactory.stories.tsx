import type { Meta, StoryObj } from "@storybook/react";
import FactoryFactory from "../FactoryFactory";

const meta: Meta<typeof FactoryFactory> = { title: "unDraw/FactoryFactory", component: FactoryFactory };

export default meta;
type Story = StoryObj<typeof FactoryFactory>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
