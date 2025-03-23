import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = { title: "unDraw/PersonalInfo", component: Example };

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = { args: {} };
