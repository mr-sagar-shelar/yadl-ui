import type { Meta, StoryObj } from "@storybook/react";
import ElasticSAN from "../ElasticSAN";

const meta: Meta<typeof ElasticSAN> = { title: "Azure/Other/ElasticSAN", component: ElasticSAN };

export default meta;
type Story = StoryObj<typeof ElasticSAN>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
