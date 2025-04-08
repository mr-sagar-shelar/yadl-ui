import type { Meta, StoryObj } from "@storybook/react";
import ElasticFabricAdapter from "../ElasticFabricAdapter";

const meta: Meta<typeof ElasticFabricAdapter> = { title: "AWS/Compute/ElasticFabricAdapter", component: ElasticFabricAdapter };

export default meta;
type Story = StoryObj<typeof ElasticFabricAdapter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
