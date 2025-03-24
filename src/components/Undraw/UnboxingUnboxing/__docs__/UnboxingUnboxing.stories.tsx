import type { Meta, StoryObj } from "@storybook/react";
import UnboxingUnboxing from "../UnboxingUnboxing";

const meta: Meta<typeof UnboxingUnboxing> = { title: "unDraw/UnboxingUnboxing", component: UnboxingUnboxing };

export default meta;
type Story = StoryObj<typeof UnboxingUnboxing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
