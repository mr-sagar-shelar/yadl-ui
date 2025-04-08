import type { Meta, StoryObj } from "@storybook/react";
import IoT1Click from "../IoT1Click";

const meta: Meta<typeof IoT1Click> = { title: "AWS/InternetofThings/IoT1Click", component: IoT1Click };

export default meta;
type Story = StoryObj<typeof IoT1Click>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
