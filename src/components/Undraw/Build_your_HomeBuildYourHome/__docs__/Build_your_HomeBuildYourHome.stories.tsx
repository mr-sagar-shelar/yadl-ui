import type { Meta, StoryObj } from "@storybook/react";
import Build_your_HomeBuildYourHome from "../Build_your_HomeBuildYourHome";

const meta: Meta<typeof Build_your_HomeBuildYourHome> = { title: "unDraw/Build_your_HomeBuildYourHome", component: Build_your_HomeBuildYourHome };

export default meta;
type Story = StoryObj<typeof Build_your_HomeBuildYourHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
