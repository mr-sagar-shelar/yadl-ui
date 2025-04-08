import type { Meta, StoryObj } from "@storybook/react";
import ElasticBlockStore from "../ElasticBlockStore";

const meta: Meta<typeof ElasticBlockStore> = { title: "AWS/Storage/ElasticBlockStore", component: ElasticBlockStore };

export default meta;
type Story = StoryObj<typeof ElasticBlockStore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
