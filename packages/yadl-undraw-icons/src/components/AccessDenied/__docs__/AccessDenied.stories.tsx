import type { Meta, StoryObj } from "@storybook/react";
import AccessDenied from "../AccessDenied";

const meta: Meta<typeof AccessDenied> = { title: "unDraw/AccessDenied", component: AccessDenied };

export default meta;
type Story = StoryObj<typeof AccessDenied>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
