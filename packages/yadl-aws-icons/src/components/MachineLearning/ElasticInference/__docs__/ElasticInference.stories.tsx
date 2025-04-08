import type { Meta, StoryObj } from "@storybook/react";
import ElasticInference from "../ElasticInference";

const meta: Meta<typeof ElasticInference> = { title: "AWS/MachineLearning/ElasticInference", component: ElasticInference };

export default meta;
type Story = StoryObj<typeof ElasticInference>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
