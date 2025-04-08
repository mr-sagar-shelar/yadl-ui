import type { Meta, StoryObj } from "@storybook/react";
import BodyText from "../BodyText";

const meta: Meta<typeof BodyText> = { title: "unDraw/BodyText", component: BodyText };

export default meta;
type Story = StoryObj<typeof BodyText>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
