import type { Meta, StoryObj } from "@storybook/react";
import OfficeSnack from "../OfficeSnack";

const meta: Meta<typeof OfficeSnack> = { title: "unDraw/OfficeSnack", component: OfficeSnack };

export default meta;
type Story = StoryObj<typeof OfficeSnack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
