import type { Meta, StoryObj } from "@storybook/react";
import ContactUs from "../ContactUs";

const meta: Meta<typeof ContactUs> = { title: "unDraw/ContactUs", component: ContactUs };

export default meta;
type Story = StoryObj<typeof ContactUs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
