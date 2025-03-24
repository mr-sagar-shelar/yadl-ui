import type { Meta, StoryObj } from "@storybook/react";
import AcceptRequest from "../AcceptRequest";

const meta: Meta<typeof AcceptRequest> = { title: "unDraw/AcceptRequest", component: AcceptRequest };

export default meta;
type Story = StoryObj<typeof AcceptRequest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
