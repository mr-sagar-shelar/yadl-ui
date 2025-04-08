import type { Meta, StoryObj } from "@storybook/react";
import ApacheMXNetonAWS from "../ApacheMXNetonAWS";

const meta: Meta<typeof ApacheMXNetonAWS> = { title: "AWS/MachineLearning/ApacheMXNetonAWS", component: ApacheMXNetonAWS };

export default meta;
type Story = StoryObj<typeof ApacheMXNetonAWS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
