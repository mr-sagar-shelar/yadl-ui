import type { Meta, StoryObj } from "@storybook/react";
import Happy2021 from "../Happy2021";

const meta: Meta<typeof Happy2021> = { title: "unDraw/Happy2021", component: Happy2021 };

export default meta;
type Story = StoryObj<typeof Happy2021>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
